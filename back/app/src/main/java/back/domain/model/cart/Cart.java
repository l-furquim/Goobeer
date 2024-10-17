package back.domain.model.cart;

import back.domain.model.product.Product;
import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;


public class Cart implements Serializable {
    private static final long serialVersionUID = 1L;

    private UUID cartId;


    private Integer itemsQuantity;


    private BigDecimal totalPrice;



    private UUID userId;

    private List<Product> cartProducts;

    public Cart(){

    }

    public Cart(UUID cartId, Integer itemsQuantity, BigDecimal totalPrice, UUID userId, List<Product> cartProducts) {
        this.cartId = cartId;
        this.itemsQuantity = itemsQuantity;
        this.totalPrice = totalPrice;
        this.userId = userId;
        this.cartProducts = cartProducts;
    }

    public Integer getItemsQuantity() {
        return itemsQuantity;
    }

    public void setItemsQuantity(Integer itemsQuantity) {
        this.itemsQuantity = itemsQuantity;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public List<Product> getCartProducts(){
        return this.cartProducts;
    }

    public void addToCart(Product product){
        this.cartProducts.add(product);
    }

    public UUID getCartId(){
        return this.cartId;
    }

    public List<Product> getProducts(){
        return this.cartProducts;
    }


}
