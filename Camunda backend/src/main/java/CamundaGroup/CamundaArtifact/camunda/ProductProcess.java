package CamundaGroup.CamundaArtifact.camunda;

import CamundaGroup.CamundaArtifact.model.ProductProcessDto;
import org.camunda.bpm.engine.ProcessEngine;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.runtime.ProcessInstanceQuery;
import org.camunda.bpm.engine.task.Task;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
@Component
public class ProductProcess {

    private final RuntimeService runtimeService;
    private final ProcessEngine processEngine;

    public ProductProcess(RuntimeService runtimeService,
                          ProcessEngine processEngine) {
        this.runtimeService = runtimeService;
        this.processEngine = processEngine;
    }

    public void processPostDeploy(ProductProcessDto productProcessDto) {
        String processDemande = "product";
        String cle = String.join(" ", String.valueOf(productProcessDto.getUserId()), String.valueOf(productProcessDto.getProductId()));

        ProcessInstanceQuery query = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(cle, processDemande);
        ProcessInstance processInstance = query.singleResult();

        if (processInstance == null) {
            Map<String, Object> processVariables = new HashMap<>();
            processVariables.put("etat", productProcessDto.getEtat());
            processVariables.put("quantity", productProcessDto.getQuantity());

            runtimeService
                    .createConditionEvaluation()
                    .setVariables(processVariables)
                    .processInstanceBusinessKey(cle)
                    .evaluateStartConditions();
        } else {
            runtimeService.setVariable(processInstance.getId(), "etat", productProcessDto.getEtat());
            runtimeService.setVariable(processInstance.getId(), "newQuantity", productProcessDto.getQuantity());
            List<Task> tasks = processEngine.getTaskService().createTaskQuery().active().processInstanceId(processInstance.getId()).list();
            for (Task task : tasks) {
                processEngine.getTaskService().complete(task.getId());
            }
        }
    }
}
