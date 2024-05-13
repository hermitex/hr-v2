// app/types/employee.ts

// The core Employee type
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // Add more employee-related fields as needed
}

// EmployeeLeave information
export interface EmployeeLeave {
  id: number;
  employeeId: number;
  startDate: string; // Consider using Date or another suitable type
  endDate: string; // Consider using Date or another suitable type
  leaveType: string;
  // Add more leave-related fields as needed
}

// EmployeeContract information
export interface EmployeeContract {
  id: number;
  employeeId: number;
  contractType: string;
  startDate: string; // Consider using Date or another suitable type
  endDate: string; // Consider using Date or another suitable type
  // Add more contract-related fields as needed
}

// EmployeePerformanceReview
export interface EmployeePerformanceReview {
  id: number;
  employeeId: number;
  reviewDate: string; // Consider using Date or another suitable type
  rating: number;
  comments: string;
  // Add more performance review-related fields as needed
}

// Define other types related to employee data as needed
