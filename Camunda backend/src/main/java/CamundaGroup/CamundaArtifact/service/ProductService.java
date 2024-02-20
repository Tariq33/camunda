package CamundaGroup.CamundaArtifact.service;

import CamundaGroup.CamundaArtifact.model.Product;

import java.util.List;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
public interface ProductService {

    List<Product> findAll();

    Product findById(Long id);
}
