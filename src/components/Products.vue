<script>
export default {
    name: 'Products',
    data() {
      return {
        products: [
          { id: '0001', product_name: 'Mac Book Pro 2020', price: '2,999'},
          { id: '0002', product_name: 'Apple Watch(Serie3)', price: '500'},
          { id: '0003', product_name: 'Iphone 11', price: '1,599'},
          { id: '0004', product_name: 'Ipad Pro 2020', price: '1,900'},
          { id: '0005', product_name: 'Apple TV HD', price: '1,499'},
        ]
      }
    }
}

</script>
<template>
    <div id="product">

            <h3>Products</h3>
            <table class="table borderless">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.product_name }}</td>
                        <td>$ {{ product.price }}</td>
                    </tr>
                </tbody>
            </table>

        <b-container>
            <h5>Here is the data</h5>
            <div v-for="post in posts" :key="post.id">
                <p>{{post.title }}</p>
            </div>
        </b-container>
    </div>
</template>

<style scoped>
 .table.th, .table.td {
    border: none;
    border-color: transparent;
 }
</style>

