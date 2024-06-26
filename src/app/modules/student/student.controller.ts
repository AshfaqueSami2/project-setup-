import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { Student } from './student.interface';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      messge: 'Student is Created Succesfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      messge: 'Student are retrieved successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

const getSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      messge: 'Student ise retrieved successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudentFromDB,
};
