<template>
  <div class="hello">
   Question
    <Dropdown
        label="Property"
        v-model="property"
        :menu-items="properties"
        placeholder="enter or select"
    >
    </Dropdown>
    <Lookup
        :search-input.sync="search"
        label="item value"
        v-model="selectedItem"
        :menu-items="items"
        placeholder="enter an item"
    >
      <template v-slot:no-results>
        No match was found
      </template>
    </Lookup>
    <Button variant="primary" type="progressive" @click="evaluate">?</Button>
  </div>
</template>

<script>
import { Button, Dropdown, Lookup } from '@wmde/wikit-vue-components';

export default {
  name: 'Question',
  components: { Button, Dropdown, Lookup },
  data: () => {
    return {
      property: null,
      search: '',
      value: '',
      properties: [ { label: "is" }, { label: "occupation" } ],
    }
  },
  computed: {
    items() {
      // API things with this.search
      // wbsearchentities

      const predefinedItems = [
        { id: 'Q5', label: 'human' },
        { id: 'Q901', label: 'scientist' },
        { id: 'Q95074', label: 'fictional character' },
        { id: 'Q82955', label: 'politician' },
        { id: 'Q2095', label: 'food' },
      ];

      return predefinedItems.filter( ( item ) => item.label.includes( this.search ) );
    }
  },
  methods: {
    evaluate() {
      this.$emit()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
