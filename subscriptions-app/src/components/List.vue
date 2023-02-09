<!--eslint-disable-->
<template>
  <div>
    <form class="ui icon input d-flex justify-content-center justify-content-md-end" style="margin-bottom: 10px">
      <input class="form-control-sm" id="search" type="search" aria-label="Search" placeholder="Search..."
             v-model="searchQuery"/>
      <i class="search icon"></i>
    </form>

    <div class="row align-items-center d-flex justify-content-center text-center">
      <div class="d-md-none" id="collapsable-card " style="width: 80%">
        <div class="card" v-for="subscription in Subscriptions" v-bind:key="subscription">
          <div class="card-header mb-1" style="border: 1px solid #35495B" :id="'heading' + subscription.key">
            <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                :data-target="'#collapse' + subscription.key"
                aria-expanded="true"
                :aria-controls="'collapse' + subscription.key">
              <h6 style="color: #0275d8; float: left">{{ subscription.name }}</h6>
            </button>
          </div>
          <div
              :id="'collapse' + subscription.key"
              class="collapse"
              :aria-labelledby="'heading' + subscription.key"
              data-bs-parent="#collapsable-card"
          >
            <div class="card-body">
              <p><b>Name: </b>{{ subscription.name }}</p>
              <p><b>Description: </b>{{ subscription.description }}</p>
              <p><b>$</b>{{ subscription.amount }}</p>
              <p class="d-none d-sm-table-cell">{{ subscription.frequency }}</p>
              <p><a :href="subscription.website" target="_blank">Details</a></p>
            </div>
            <div class="btn-group">
              <div @click="updateSubscription(subscription)">
                <button style="background-color: transparent; padding: 0;">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor"
                      class="bi bi-pencil" viewBox="0 0 16 16"
                  >
                    <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
              </div>
              <button @click="deleteSubscription(id)" style="background-color: transparent; padding: 0;">
                <svg
                    @click="deleteSubscription"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" fill="currentColor"
                    class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--full screen-->
    <div class="d-none d-sm-block d-sm-none d-md-block List">
      <div class="row justify-content-center">
        <div class="col-md-8"><h3 class="text-center">Subscriptions</h3>
          <table class="table align-middle">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th class="d-none d-sm-table-cell">Frequency</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody v-if="searchedSubscriptions">
              <tr v-for="subscription in searchedSubscriptions" :key="subscription.key">
                <td>{{ subscription.name }}</td>
                <td>{{ subscription.description }}</td>
                <td>${{ subscription.amount }}</td>
                <td class="d-none d-sm-table-cell">{{ subscription.frequency }}</td>
                <td><a :href="subscription.website" target="_blank">Details</a></td>
                <td>
                  <router-link :to="{name: 'edit', params: { id: subscription.key }}"
                               class="btn btn-primary btn-sm px-3">
                    Edit
                  </router-link>
                  <button @click.prevent="deleteSubscription(subscription.key)"
                          class="btn btn-danger btn-sm px-3">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
            <tr v-for="subscription in Subscriptions" :key="subscription.key">
              <td>{{ subscription.name }}</td>
              <td>{{ subscription.description }}</td>
              <td>${{ subscription.amount }}</td>
              <td class="d-none d-sm-table-cell">{{ subscription.frequency }}</td>
              <td><a :href="subscription.website" target="_blank">Details</a></td>
              <td>
                <router-link :to="{name: 'edit', params: { id: subscription.key }}"
                             class="btn btn-primary btn- sm px-3">
                  Edit
                </router-link>
                <button @click.prevent="deleteSubscription(subscription.key)"
                        class="btn btn-danger btn- sm px-3">
                  Delete
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../firebaseDb'
import router from "@/router";

export default {
  data() {
    return {
      Subscriptions: [],
      searchQuery: null,
      headers: [
        {text: 'Name', sortable: false, align: 'left'},
        {text: 'Amount', sortable: false, align: 'left',},
        {text: 'Website', sortable: false, align: 'left',},
      ],
    }
  },
  created() {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        this.Subscriptions.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount,
          frequency: doc.data().frequency,
          website: doc.data().website
        })
      })
    })
  },
  methods: {
    updateSubscription(subscription) {
      router.push("/edit/" + subscription.key);
    },
    deleteSubscription(id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
          console.log('Document deleted!')
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  },
  computed: {
    searchedSubscriptions() {
      if (this.searchQuery) {
        return this.Subscriptions.filter((subscriptions) => {
          return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => subscriptions.name.toLowerCase().includes(v));
        });
      } else {
        console.log(this.userData);
        return this.userData;
      }
    },
  },
}
</script>
<style>
.table thead {
  background-color: #42B883;
  color: #2C3D4E;
}

.table td, .table th {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.btn {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin: 2px;
}

#search {
  background: #35495B;
  color: #007aff;
}
</style>
