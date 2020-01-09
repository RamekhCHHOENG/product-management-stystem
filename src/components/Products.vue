<script>
import { mapGetters } from "vuex"
import axios from 'axios'
export default {
    name: 'Products',
    mounted () {
        this.$store.dispatch('LoadPosts')
    },
    computed: {
        ...mapGetters({
            flavor: 'flavor',
            productList: 'productList',
            postList: 'getPostList'
        })
    },
    methods: {
        showAlertDelete() {
            swal({
                title: "Are you sure?",
                text: "You want to delete this product!!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal({
                    title: "Succeed",
                    text: "Poof! Your imaginary file has been deleted!",
                    icon: "success",
                });
            } else {
                swal({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: 'error',   
                });
            }
            });
        },

        changed: function(event) {
            this.$store.commit('change', event.target.value)
        }
    },
}

</script>
<template>
    <div id="product">
            <b-container>
                <h3>Products</h3>
                <table class="table borderless">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in productList" :key="product.id">
                            <td>{{ product.id }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.year }}</td>
                            <td>$ {{ product.price }}</td>
                            <td>
                                <a href="#" variant="primary">
                                <i class="fa fa-edit"></i>
                                </a>
                                <a href="#" variant="danger" @click="showAlertDelete">
                                <i class="fa fa-trash"></i>
                                </a>

                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <label for="flavor">Favorite ice cream flavor?</label>
                    <input @input="changed" name="flavor">
                </div>
                <p>You choose {{ flavor}}</p>

                <!-- <b-list-group v-for="product in products" :key="product.id">
                    <b-list-group-item>{{ post.title }}</b-list-group-item>

                </b-list-group> -->

            </b-container>
        <b-container>
            
        </b-container>
    </div>
</template>

<style>
 .table.th, .table.td {
    border: none;
    border-color: transparent;
    font-size: 10px;
 }
 .table {
     padding: 10px;
     background-color: white;
     color: black;
 }
 h3 {
     font-family: "Sora-Regular";
     background: "red";
 }
</style>

