package CamundaGroup.CamundaArtifact.serviceImpl;

import CamundaGroup.CamundaArtifact.model.Product;
import CamundaGroup.CamundaArtifact.repository.ProductRepository;
import CamundaGroup.CamundaArtifact.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).get();
    }
}
