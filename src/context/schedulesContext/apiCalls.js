import axios from "axios";
import {
  getSchedulesFailure,
  getSchedulesStart,
  getSchedulesSuccess,
} from "./SchedulesActions";

export const getSchedules = async (user, dispatch) => {
  dispatch(getSchedulesStart());

  try {
    const res = await axios.get("http://127.0.0.1:8000/api/categories/", {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.data);
    dispatch(getSchedulesSuccess(res.data));
  } catch (err) {
    dispatch(getSchedulesFailure(err));
  }
};
