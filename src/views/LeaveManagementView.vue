
<template>
  <div>
    <h2>Leave Requests Management</h2>
    <table border="1" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!--v-for is for looping through every employee and request in the array-->
        <!--key="" renders through the list meaning that it displays the list on the webpage-->
        <tr v-for="(employee, empIndex) in LeaveRequests" :key="employee.employeeId">
          <template v-for="(request, reqIndex) in employee.leaveRequests" :key="reqIndex">
            <tr>
              <td>{{ employee.name }}</td>
              <td>{{ request.date }}</td>
              <td>{{ request.reason }}</td>
              <td>{{ request.status }}</td>
              <td>
                <!--@clicks="" is vues way to handle click evrrnts-->
                <button
                  v-if="request.status === 'Pending'"
                  @click="updateLeaveStatus(empIndex, reqIndex, 'Approved')"
                >
                  Approve
                </button>
                <button
                  v-if="request.status === 'Pending'"
                  @click="updateLeaveStatus(empIndex, reqIndex, 'Denied')"
                >
                  Decline
                </button>
              </td>
            </tr>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'LeaveManagementView',
  data() {
    return {
      LeaveRequests: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
          leaveRequests: [
            { date: "2025-07-22", reason: "Sick Leave", status: "Approved" },
            { date: "2024-12-01", reason: "Personal", status: "Pending" }
          ]
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          leaveRequests: [
            { date: "2025-07-15", reason: "Family Responsibility", status: "Denied" },
            { date: "2024-12-02", reason: "Vacation", status: "Approved" }
          ]
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          leaveRequests: [
            { date: "2025-07-10", reason: "Medical Appointment", status: "Approved" },
            { date: "2024-12-05", reason: "Personal", status: "Pending" }
          ]
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          leaveRequests: [
            { date: "2025-07-20", 
            reason: "Bereavement", 
            status: "Approved" }
          ]
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          leaveRequests: [
            { date: "2024-12-01", 
            reason: "Childcare", 
            status: "Pending" }
          ]
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          leaveRequests: [
            { date: "2025-07-18", 
            reason: "Sick Leave", 
            status: "Approved" }
          ]
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          leaveRequests: [
            { date: "2025-07-22", 
            reason: "Vacation", 
            status: "Pending" }
          ]
        },
        {
          employeeId: 8,
          name: "Farai Gumbo",
          leaveRequests: [
            { date: "2024-12-02", 
            reason: "Medical Appointment", 
            status: "Approved" }
          ]
        },
        {
          employeeId: 9,
          name: "Karabo Dlamini",
          leaveRequests: [
            { date: "2025-07-19", 
            reason: "Childcare", 
            status: "Denied" }
          ]
        },
        {
          employeeId: 10,
          name: "Fatima Patel",
          leaveRequests: [
            { date: "2024-12-03",
             reason: "Vacation", 
             status: "Pending" }
          ]
        }
      ]
    };
  },
  methods: {
    updateLeaveStatus(empIndex, reqIndex, newStatus) { //updates the status of lrave requests by targeting via index
      this.LeaveRequests[empIndex].leaveRequests[reqIndex].status = newStatus;
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: #f0f0f0;
}
button {
  margin-right: 8px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>