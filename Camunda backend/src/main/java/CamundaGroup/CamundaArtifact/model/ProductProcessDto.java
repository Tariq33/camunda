package CamundaGroup.CamundaArtifact.model;

import CamundaGroup.CamundaArtifact.model.enumeration.Etat;

/**
 * @author Tariq Farud
 * @date 27/10/2022
 * @project Camunda
 */
public class ProductProcessDto {
    long productId;
    long userId;
    Etat etat;
    long quantity;

    public ProductProcessDto() {
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }
}
