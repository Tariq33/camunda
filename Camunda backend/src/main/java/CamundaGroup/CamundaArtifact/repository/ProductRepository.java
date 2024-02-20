package CamundaGroup.CamundaArtifact.repository;

import CamundaGroup.CamundaArtifact.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
public interface ProductRepository extends JpaRepository<Product, Long> {

}
