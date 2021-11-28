Vue.component('product',{
    props:{
        premium: {
            type: Boolean,
            required: true
          },
        best:{
            type:String,
            required: true
        }
    },
    template: `
    <div class="product">

    <div class="product-image">
        <img :src="image" alt="product image">
    </div>

    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inventory">In Stock</p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Less than 10 items left</p> -->
        <p v-else>Out of Stock</p>

        <h2>Details</h2>
        <ul class="details">
            <li v-for="detail in details">{{detail}}</li>
        </ul>

        <h2>Variants</h2>
        <ul class="variants">
            <li v-for="(variant , idx) in variants" :key="variant.variantId" class="colorBox"
                @mouseenter="updateVar(idx)" :style="{backgroundColor:variant.variantColor}">
                {{variant.variantColor}}
            </li>
        </ul>

        <p>Shipping is {{shipping}}</p>
        <p>This item is {{best}}</p>
        <button v-on:click="addToCart" :disabled="!inventory" :class="{ disabled : !inventory}">Add to
            Cart</button>
        <button v-on:click="remove">Remove from Cart</button>

    </div>
</div>
    `,
    data(){
        return{
            product:'socks',
            brand: 'Vue Mastery',
            selectedVariants:0,
            cart:0,
            details:[
                '80% cotton',
                '20% polyester',
                'Gender-neutral'
            ],
            variants:[
                {
                    variantId: 2334,
                    variantColor:"green",
                    variantImage: "./greenSocks.png",
                    variantInventory:12
                },
                {
                    variantId: 2335,
                    variantColor:"navy",
                    variantImage: "./navySocks.png",
                    variantInventory:0
                },
            ]
        }
    },
    methods :{
        addToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariants].variantId)
        },
        remove(){
            this.$emit('remove-from-cart',this.variants[this.selectedVariants].variantId)
        },
        updateVar(idx){
            this.selectedVariants = idx
        }

    },
    computed:{
        title(){
            return `${this.brand} ${this.product}`
        },    
        image(){
            return this.variants[this.selectedVariants].variantImage
        },
        inventory(){
            return this.variants[this.selectedVariants].variantInventory
        },
        shipping(){
            if(this.premium){
                return 'free'
            }else{
                return '$2.99'
            }
        }
    }
})

Vue.component('review',{
    template:`
    <form @submit.prevent="reviewSubmit">
        <p>
        <label for="name">User Name</label>
        <input id="name" type=text v-model="name">
        </p>
        <p>
        <label for="review">Review</label>
        <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
            <option selected>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        </p>
        <button>Submit</button>
    </form>
    `,
    data(){
        return{
            name:null,
            review:null,
            rating:null
        }
    },
    methods:{
        reviewSubmit(){
            let reviewData = {
                name:this.name,
                review:this.review,
                rating:this.rating
            }
            this.$emit('review-submitted',reviewData)
            this.name = null,
            this.review = null,
            this.rating = null
        }
    }
})

let app = new Vue({
    el:'#app',
    data:{
        premium: false,
        best:'BEST',
        cart:[],
        review:[]
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            for(let i=this.cart.length; i >= 0 ;i--){
                if(this.cart[i] === id){
                    this.cart.splice(i,1)
                }
            }
        },
        receiveReview(data){
            this.review.push(data)
        }
    }
});
