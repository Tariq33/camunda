package CamundaGroup.CamundaArtifact.resource;

import CamundaGroup.CamundaArtifact.camunda.ProductProcess;
import CamundaGroup.CamundaArtifact.model.Product;
import CamundaGroup.CamundaArtifact.model.ProductProcessDto;
import CamundaGroup.CamundaArtifact.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductResource {


    private final ProductService productService;
    private final ProductProcess productProcess;
    public ProductResource(ProductService productService, ProductProcess productProcess) {
        this.productService = productService;
        this.productProcess = productProcess;
    }

    @PostMapping("/process")
    public ResponseEntity<Void> process(@RequestBody ProductProcessDto productProcessDto) {
        productProcess.processPostDeploy(productProcessDto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping()
    public ResponseEntity<List<Product>> findAll() {
        return new ResponseEntity<>(productService.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") Long id) {
            return new ResponseEntity<>(productService.findById(id), HttpStatus.ACCEPTED);
    }
}
