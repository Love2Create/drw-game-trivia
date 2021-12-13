<template>
  <div class="form-container">
    <div class="form-copy">
      <h2 class="form-title">{{ title }}</h2>
      <p>Lodging: Wynn Las Vegas</p>
      <p>Friday, February 4</p>
      <p>
        Truly Hard Seltzer NHL Fan Fair (3-9pm) - Las Vegas Concention Center -
        West Hall 1 & 2
      </p>
      <p>NHL All Star Skills Competition(4:30-7pm) - T-Mobile Arena</p>
      <p>Choice of Activity in the evening</p>
      <p>Saturday, February 5</p>
      <p>Breakfast on your own</p>
      <p>Depart for T-Mobile Arena (11am)</p>
      <p>2022 Honda NHL All Star Game (12-3pm)</p>
      <p>
        Feoup Dinner at Delmonico Steakhouse (7:30pm) - Dress Code: Smart Casual
      </p>
      <p>Sunday, February 6</p>
      <p>Depart</p>
    </div>
    <div clas="personal-info-title">
      <h2>Personal Information</h2>
    </div>
    <div>
      <div id="form-sec">
        <h3>Legal Name*</h3>
        <div class="form-1col-sec">
          <input v-model="inputResults.firstName" type="text" required />
          <label>First Name</label>
        </div>
        <div class="form-1col-sec">
          <input v-model="inputResults.middleName" type="text" />
          <label>Middle Name<br />(optional)</label>
        </div>
        <div class="form-1col-sec">
          <input v-model="inputResults.lastName" type="text" required />
          <label>Last Name</label>
        </div>
      </div>
      <div id="form-sec">
        <h3>Date of Birth*</h3>
        <input v-model="inputResults.birthday" type="date" required />
      </div>
      <div id="form-sec">
        <div>
          <h3>Home Address</h3>
          <input v-model="inputResults.address1" type="text" required /><label>Address Line 1</label>
          <input v-model="inputResults.address2" type="text" /><label>Address Line 2</label>
        </div>
        <div class="form-2col-sec">
          <div><input v-model="inputResults.city" type="text" required /><label>City</label></div>
          <div>
            <select v-model="inputResults.state" class="state-select" required>
              <option
                v-for="state in states"
                :key="state.value"
                :value="state.value"
              >
                {{ state.name }}
              </option>
            </select>
            <label>State: </label>
          </div>
        </div>
      </div>
      <div id="btn-submit" class="form-1col-sec">
        <button @click="submitClicked">Submit</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "NHL All Star Trip Registration",
      states: [
        {
          name: "Alabama",
          value: "AL",
        },
        {
          name: "Alaska",
          value: "AK",
        },
        {
          name: "Arizona",
          value: "AZ",
        },
        {
          name: "Arkansas",
          value: "AR",
        },
        {
          name: "California",
          value: "CA",
        },
        {
          name: "Colorado",
          value: "CO",
        },
        {
          name: "Connecticut",
          value: "CT",
        },
        {
          name: "Delaware",
          value: "DE",
        },
        {
          name: "District of Columbia",
          value: "DC",
        },
        {
          name: "Florida",
          value: "FL",
        },
        {
          name: "Georgia",
          value: "GA",
        },
        {
          name: "Guam",
          value: "GU",
        },
        {
          name: "Idaho",
          value: "ID",
        },
        {
          name: "Illinois",
          value: "IL",
        },
        {
          name: "Indiana",
          value: "IN",
        },
        {
          name: "Iowa",
          value: "IA",
        },
        {
          name: "Kansas",
          value: "KS",
        },
        {
          name: "Kentucky",
          value: "KY",
        },
        {
          name: "Louisiana",
          value: "LA",
        },
        {
          name: "Maine",
          value: "ME",
        },
        {
          name: "Maryland",
          value: "MD",
        },
        {
          name: "Massachusetts",
          value: "MA",
        },
        {
          name: "Michigan",
          value: "MI",
        },
        {
          name: "Minnesota",
          value: "MN",
        },
        {
          name: "Mississippi",
          value: "MS",
        },
        {
          name: "Missouri",
          value: "MO",
        },
        {
          name: "Montana",
          value: "MT",
        },
        {
          name: "Nebraska",
          value: "NE",
        },
        {
          name: "Nevada",
          value: "NV",
        },
        {
          name: "New Hampshire",
          value: "NH",
        },
        {
          name: "New Jersey",
          value: "NJ",
        },
        {
          name: "New Mexico",
          value: "NM",
        },
        {
          name: "New York",
          value: "NY",
        },
        {
          name: "Nerth Carolina",
          value: "NC",
        },
        {
          name: "Nerth Dakota",
          value: "ND",
        },
        {
          name: "Ohio",
          value: "OH",
        },
        {
          name: "Oregon",
          value: "OR",
        },
        {
          name: "Pennsylvania",
          value: "PA",
        },
        {
          name: "Puerto Rico",
          value: "PR",
        },
        {
          name: "Rhode Island",
          value: "RI",
        },
        {
          name: "South Carolina",
          value: "SC",
        },
        {
          name: "South Dakota",
          value: "SD",
        },
        {
          name: "Tennessee",
          value: "TN",
        },
        {
          name: "Texas",
          value: "TX",
        },
        {
          name: "Utah",
          value: "UT",
        },
        {
          name: "Vermont",
          value: "VT",
        },
        {
          name: "Virgin Islands",
          value: "VI",
        },
        {
          name: "Virginia",
          value: "VA",
        },
        {
          name: "Washington",
          value: "WA",
        },
        {
          name: "West Virginia",
          value: "WV",
        },
        {
          name: "Wisconsin",
          value: "WI",
        },
        {
          name: "Wyoming",
          value: "WY",
        },
      ],
      inputResults:{
          firstName:"",
          lastName:"",
          middleName:"",
          birthday: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
        }
    };
  },
  methods: {
    submitClicked(){
      this.$emit("submit-clicked", this.inputResults);
    }
  }
};
</script>
