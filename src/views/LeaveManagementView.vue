<template>
    <div>
    <h2>Leave Requests Management 📩</h2><br>
    <div class="card-row">
      <div id="card">
        <h3>APPROVED <br>5</h3>
      </div>
      <div id="decl-card">
        <h3>DECLINED <br>2</h3>
      </div>
      <div id="pend-card">
        <h3>PENDING <br>3</h3>
      </div>
    </div>
    <button id="REQUEST" @click="showForm = true">+ADD NEW REQUEST</button><br>
    <div v-if="showForm" class="modal-form">
      <h3>Add Leave Request</h3>
      <form @submit.prevent="submitForm">
        <label>
          Employee Name:
          <input v-model="form.employeeName" required />
        </label><br><br>
        <label>
          Date:
          <input type="date" v-model="form.date" required />
        </label><br><br>
        <label>
          Reason:
          <input v-model="form.reason" required />
        </label><br><br>
        <button type="submit">Submit</button>
        <button type="button" @click="showForm = false">Cancel</button>
      </form>
    </div>

    <table class="table" id="leave-requests" border="1">
      <thead>
        <tr>
          <th scope="col">Employee Name:</th>
          <th scope="col">Date:</th>
          <th scope="col">Reason:</th>
          <th scope="col">Status:</th>
          <th scope="col">Actions:</th>
        </tr>
      </thead>
      <tbody>
        <!--v-for is for looping through every employee and request in the array-->
        <!--key="" renders through the list meaning that it displays the list on the webpage-->
        <tr v-for="(employee, empIndex) in LeaveRequests" :key="employee.employeeId">
          <template v-for="(request, reqIndex) in employee.leaveRequests" :key="reqIndex">
            <td id="employee">{{ employee.name }}</td>
            <td>{{ request.date }}</td>
            <td>{{ request.reason }}</td>
            <td>{{ request.status }}</td>
            <td>
              <!--@clicks="" is vues way to handle click evrrnts-->
              <button v-if="request.status === 'Pending'"
                @click="updateLeaveStatus(empIndex, reqIndex, 'Approved')">Approve
              </button>
              <button v-if="request.status === 'Pending'"
                @click="updateLeaveStatus(empIndex, reqIndex, 'Denied')">Decline
              </button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SideBarComp from '@/components/SideBarComp.vue';
export default {
  name: 'LeaveManagementView',
  data() {
    return {
      LeaveRequests: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
          leaveRequests: [
            { date: "2025-07-22 ", reason: "Sick Leave", status: "Approved" },
          ]
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          leaveRequests: [
            { date: "2025-07-15", reason: "Family Responsibility", status: "Denied" },
          ]
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          leaveRequests: [
            { date: "2025-07-10", reason: "Medical Appointment", status: "Approved" },
          ]
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          leaveRequests: [
            {
              date: "2025-07-20",
              reason: "Bereavement",
              status: "Approved"
            }
          ]
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          leaveRequests: [
            {
              date: "2024-12-01",
              reason: "Childcare",
              status: "Pending"
            }
          ]
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          leaveRequests: [
            {
              date: "2025-07-18",
              reason: "Sick Leave",
              status: "Approved"
            }
          ]
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          leaveRequests: [
            {
              date: "2025-07-22",
              reason: "Vacation",
              status: "Pending"
            }
          ]
        },
        {
          employeeId: 8,
          name: "Farai Gumbo",
          leaveRequests: [
            {
              date: "2024-12-02",
              reason: "Medical Appointment",
              status: "Approved"
            }
          ]
        },
        {
          employeeId: 9,
          name: "Karabo Dlamini",
          leaveRequests: [
            {
              date: "2025-07-19",
              reason: "Childcare",
              status: "Denied"
            }
          ]
        },
        {
          employeeId: 10,
          name: "Fatima Patel",
          leaveRequests: [
            {
              date: "2024-12-03",
              reason: "Vacation",
              status: "Pending"
            }
          ]
        }
      ],
      showForm: false,
      form: {
        employeeName: '',
        date: '',
        reason: '',
      }
    };
  },
  methods: {
    updateLeaveStatus(empIndex, reqIndex, newStatus) {  //updates the status of lrave requests by targeting via index
      this.LeaveRequests[empIndex].leaveRequests[reqIndex].status = newStatus;
    },
    submitForm() {

      //this refers to the object that contains your submitForm method
      const employee = this.LeaveRequests.find(
        emp => emp.name.toLowerCase() === this.form.employeeName.trim().toLowerCase()
      );
      if (employee) {
        employee.leaveRequests.push({
          date: this.form.date,
          reason: this.form.reason,
          status: 'Pending'
        });
      } else {
        //the push adds new leave request to existing employee
        const newId = this.LeaveRequests.length + 1;
        this.LeaveRequests.push({
          employeeId: newId,
          name: this.form.employeeName,
          leaveRequests: [
            {
              date: this.form.date,
              reason: this.form.reason,
              status: 'Pending'
            }
          ]
        });
      }
      //clears the form input fields after submitting
      this.form.employeeName = '';
      this.form.date = '';
      this.form.reason = '';
      this.showForm = false;//changes the intiall function of the code and basically hides it
      alert('Leave request submitted successfully!')
    }
  }
};
</script>

<style scoped>
.card-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

#card:hover,
#decl-card:hover,
#pend-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px;
}

#card,
#decl-card,
#pend-card {
  width: 170px;
  height: 100px;
  border: 1px solid;
  border-radius: 25px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 2px 8px
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed;
}

#REQUEST {
  margin-left: 85%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f0f0f0;
}

button {
  margin-right: 8px;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 15px;
}

thead th {
  background-color: #e0e0e0;
  color: #333;
}

.modal-form {
  background: #fff;
  border: 8px solid;
  padding: 24px;
  margin-bottom: 20px;
  max-width: 400px;
  border-radius: 20px;
  margin-left: 550px;
}
</style>
