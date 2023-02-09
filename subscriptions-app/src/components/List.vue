<!--eslint-disable-->
<template>
  <div>
    <div class="ui icon input d-flex justify-content-center justify-content-md-end" >
      <input id="search" type="text" placeholder="Search..." v-model="searchQuery"/>
      <i class="search icon"></i>
    </div>
    <div class="List">
      <div class="row justify-content-center">
        <div class="col-md-8"><h3 class="text-center">Subscriptions</h3>
          <table class="table align-middle">
            <thead>
            <tr>
              <th>Name</th>
              <th class="d-none d-sm-table-cell">Description</th>
              <th>Amount</th>
              <th class="d-none d-sm-table-cell">Frequency</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody v-if="searchedSubscriptions">
              <tr v-for="subscription in searchedSubscriptions" :key="subscription.key">
                <td>{{ subscription.name }}</td>
                <td class="d-none d-sm-table-cell">{{ subscription.description }}</td>
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
                <td class="d-none d-sm-table-cell">{{ subscription.description }}</td>
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

export default {
  data() {
    return {
      Subscriptions: [],
      searchQuery: null,
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
