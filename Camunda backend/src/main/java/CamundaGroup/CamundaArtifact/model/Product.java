package CamundaGroup.CamundaArtifact.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Float price;

    @Column(name = "description")
    private String description;

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
