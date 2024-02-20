package CamundaGroup.CamundaArtifact.camunda.delegates;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
@Component
public class BuyDelegate implements JavaDelegate {

    @Override
    public void execute(DelegateExecution execution) {
        System.out.println("Buy delegate");
    }

}