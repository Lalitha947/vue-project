
<template>
  <div>
    <br><br><h2>PERFORMANCE REVIEWS 🌟🚀👏💯📈</h2><br><br>
    <button @click="showForm = true">+ADD PERFORMANCE REVIEW</button>
    
    <br><div v-if="showForm" class="modal-form">
      <h3>Add Performance Review</h3>
      <br><form @submit.prevent="submitForm">
        <label>
          Employee Name:
          <input v-model="form.employeeName" required />
        </label><br><br>
        <label>
          Department:
          <input v-model="form.Department" required />
        </label><br><br>
        <label>
          Date:
          <input type="date" v-model="form.Date" required />
        </label><br><br>
        <label>
          Reviewer:
          <input v-model="form.Reviewer" required />
        </label><br><br>
        <label>
          Punctuality:
          <input v-model="form.Punctuality" required />
        </label><br><br>
        <label>
          Dependability:
          <input v-model="form.Dependability" required />
        </label><br><br>
        <button type="submit">Submit</button>
        <button type="button" @click="showForm = false">Cancel</button>
      </form>
    </div>
    <table class="table" id="performance-review" border="1">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Date</th>
          <th scope="col">Reviewer</th>
          <th scope="col">Punctuality</th>
          <th scope="col">Dependability</th>
        </tr>
      </thead>
      <tbody>
  <tr v-for="employee in PerformanceReview" :key="employee.employeeId">
    <template v-for="(review, revIndex) in employee.performanceReview" :key="employee.employeeId">
      <td>{{ employee.name || employee.Name }}</td>
      <td>{{ review.Department }}</td>
      <td>{{ review.Date }}</td>
      <td>{{ review.Reviewer }}</td>
      <td>{{ review.Punctuality }}</td>
      <td>{{ review.Dependability }}</td>
    </template>
  </tr>
</tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'PerformanceReviewView',
  data() {
    return {
      PerformanceReview: [
        {
          employeeId: 1,
          Name: "Sibongile Nkosi",
          performanceReview: [
            { Date: "2025-06-26", Department: "Development", Reviewer: "Khanyiso Haman", Punctuality: "Good", Dependability: "Excellent" },
          ]
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          performanceReview: [
            { Date: "2025-06-27", Department: "HR", Reviewer: "Khanyiso Haman", Punctuality: "Average", Dependability: "Good" },
          ]
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          performanceReview: [
            { Date: "2025-06-28", Department: "QA", Reviewer: "Matthew Brown", Punctuality: "Good", Dependability: "Good" },
          ]
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          performanceReview: [
            { Date: "2025-06-29", Department: "Sales", Reviewer: "Ruth N'zola", Punctuality: "Good", Dependability: "Good" },
          ]
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          performanceReview: [
            { Date: "2025-06-30", Department: "Marketing", Reviewer: "Khanyiso Haman", Punctuality: "Bad", Dependability: "Poor" },
          ]
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          performanceReview: [
            { Date: "2025-06-31", Department: "Marketing", Reviewer: "Ruth N'zola", Punctuality: "Good", Dependability: "Good" },
          ]
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          performanceReview: [
            { Date: "2025-07-01", Department: "IT", Reviewer: "Ruth N'zola", Punctuality: "Good", Dependability: "Excellent" },
          ]
        },
      ],
      showForm: false,
      form: {
        employeeName: '',
        Department: '',
        Date: '',
        Reviewer: '',
        Punctuality: '',
        Dependability: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Find employee by name (case-insensitive)
      const employee = this.PerformanceReview.find(
        emp => (emp.name || emp.Name).toLowerCase() === this.form.employeeName.trim().toLowerCase()
      );
      if (employee) {
        employee.performanceReview.push({
          Department: this.form.Department,  
          Date: this.form.Date,
          Reviewer: this.form.Reviewer,
          Punctuality: this.form.Punctuality,
          Dependability: this.form.Dependability
        });
        
      } else {
        //the push adds new leave request to existing employee
        const newId = this.PerformanceReview.length + 1;
        this.PerformanceReview.push({
          employeeId: newId,
          name: this.form.employeeName,
          performanceReview: [
            {
          Department: this.form.Department,  
          Date: this.form.Date,
          Reviewer: this.form.Reviewer,
          Punctuality: this.form.Punctuality,
          Dependability: this.form.Dependability
            }
          ]
        });
        alert('Performance review added!');
      }
      this.form = {
        employeeName: '',
        Department: '',
        Date: '',
        Reviewer: '',
        Punctuality: '',
        Dependability: ''
      };
      this.showForm = false;
    },
    computed: {
  allReviews() {
    return this.LeaveManagement.flatMap(emp =>
      emp.leaveManagement.map(review => ({
        name: emp.name || emp.Name,
        ...review
      }))
    );
  }
}
  }
};
</script>
<style scoped>
.modal-form {
   background: #fff;
  border: 8px solid;
  padding: 24px;
  margin-top: 40px;
  max-width: 400px;
  border-radius: 20px;
  margin-left: 550px;
  
}

button {
  margin-right: 8px;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  background: #e6eaff;
  cursor: pointer;
  font-weight: bold;
}

button {
  background: #4f8cff;
  color: #fff;
  border: none;
}

button {
  background: #eee;
  color: #333;
}

table {
   width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed;
}

th, td {
  border: 1px solid #ccc;
  padding: 12px;
  
}
  

th {
  background-color: #e6eaff;
  color: #333;
}

tr {

  width: 100%;
  
}
</style>