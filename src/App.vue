<template>
  <div class="input-block">
    <input type="text" v-model="val" placeholder="Paste quote id" />
    <button @click="getData">Get Data</button>
  </div>

  <div class="data-block" v-if="quoteId !== ''">
    <div>
      <p>Email: {{ response.data.data.cart.email }}</p>
      <p>Billing Address: {{ response.data.data.cart.billing_address }}</p>
      <p>Shipping Addresses: {{ response.data.data.cart.shipping_addresses }}</p>
    </div>
    <hr>
    <div>
      Items:
      {{ response.data.data.cart.items }}
    </div>
    <hr>
    <div>
      Available Payment Methods:
      {{ response.data.data.cart.available_payment_methods }}
    </div>
    <hr>
    <div>
      Selected Payment Method:
      {{ response.data.data.cart.selected_payment_method }}
    </div>
    <hr>
    <div>
      Prices:
      {{ response.data.data.cart.prices }}
    </div>
    <hr>
    <div>
      Applied coupons:
      {{ response.data.data.cart.applied_coupons }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: '',
      quoteId: '',
      val: ''
    };
  },

  methods: {
    getData() {
      this.quoteId = this.val;
      this.getCartData();
    },
    async getCartData() {
      try {
        const response = await this.$http.post(
            "https://gene.loc/graphql",
            {
              query: `
                query cart ($id: String!) {
                  cart (cart_id: $id) {
                    email
                    billing_address {
                      city
                      country {
                        code
                        label
                      }
                      firstname
                      lastname
                      postcode
                      region {
                        code
                        label
                      }
                      street
                      telephone
                    }
                    shipping_addresses {
                      firstname
                      lastname
                      street
                      city
                      region {
                        code
                        label
                      }
                      country {
                        code
                        label
                      }
                      telephone
                      available_shipping_methods {
                        amount {
                          currency
                          value
                        }
                        available
                        carrier_code
                        carrier_title
                        error_message
                        method_code
                        method_title
                        price_excl_tax {
                          value
                          currency
                        }
                        price_incl_tax {
                          value
                          currency
                        }
                      }
                      selected_shipping_method {
                        amount {
                          value
                          currency
                        }
                        carrier_code
                        carrier_title
                        method_code
                        method_title
                      }
                    }
                    items {
                      id
                      product {
                        name
                        sku
                      }
                      quantity
                    }
                    available_payment_methods {
                      code
                      title
                    }
                    selected_payment_method {
                      code
                      title
                    }
                    applied_coupons {
                      code
                    }
                    prices {
                      grand_total {
                        value
                        currency
                      }
                    }
                  }
                }
              `,
              variables: {
                id: this.quoteId,
              }
            }, {
              headers: {
                "Access-Control-Allow-Origin": "*"
              },
            });
        // JSON responses are automatically parsed.
        console.log(response)

        this.response = response;

      } catch (error) {
        console.log(error);
      }
    },
    async postData() {
      try {
        const response = await this.$http.post(
            "https://gene.loc/index.php/rest/V1/integration/admin/token",
            {
              "username": "admin1",
              "password": "admin123"
            }
        );
        // JSON responses are automatically parsed.
        console.log(response)
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async putData() {
      try {
        const response = await this.$http.put(
            "https://gene.loc/index.php/rest/V1/products/test1",
            {
              "product": {
                "sku": "test2",
                "name": "test111",
                "attribute_set_id": 4,
                "price": 50,
                "status": 1,
                "visibility": 4,
                "type_id": "simple",
                "weight": "0.6",
              }
            },
            {
              headers: {
                Authorization: 'Bearer w2ekob9z440suqrxri20vmdu0t69kok6'
              }
            }
        );
        // JSON responses are automatically parsed.
        console.log(response)
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    // this.postData();
    // this.putData();
    // this.getCartData();
  },
};
</script>

<style>
.input-block {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: #2b2b2b;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.data-block {
  padding: 20px;
}

</style>