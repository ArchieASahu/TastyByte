import axios from "axios";

class FoodApiService {
  constructor() {
    this.api = String(import.meta.env.VITE_API);
  }

  async getAllFoods(limit = null) {
    try {
      let url = `${this.api}/food`;
      if (limit) {
        url += `?limit=${limit}`;
      }
      const res = await axios.get(url);
      console.log(res.data);
      return { data: res.data, status: true };
    } catch (error) {
      console.log(error);
      return { status: false };
    }
  }
  async addFood(food) {
    try {
      const res = await axios.post(`${this.api}/food`, food);
      console.log(res.data);
      return { data: res.data, status: true };
    } catch (error) {
      console.log(error);
      return { status: false };
    }
  }
  async getFoodById(author) {
    try {
      const res = await axios.get(`${this.api}/food/author/${author}`);
      console.log(res.data);
      return { data: res.data, status: true };
    } catch (error) {
      console.log(error);
      return { status: false };
    }
  }

  async foodDetails(id) {
    try {
      const res = await axios.get(`${this.api}/food/${id}`);
      console.log(res.data[0]);
      return { data: res.data[0], status: true };
    } catch (error) {
      console.log(error);
      return { status: false, error };
    }
  }

  async updateFood(id, food) {
    try {
      const res = await axios.put(`${this.api}/food/${id}`, food);
      console.log(res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.log(error);
      return { status: false, error };
    }
  }

  async deleteFood(id) {
    try {
      const res = await axios.delete(`${this.api}/food/${id}`);
      console.log(res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.log(error);
      return { status: false, error };
    }
  }

  async searchFoods(searchString) {
    try {
      const res = await axios.get(
        `${this.api}/food/search?searchString=${searchString}`
      );
      console.log(res.data);
      return { data: res.data, status: true };
    } catch (error) {
      console.error(error);
      return { status: false };
    }
  }
}

const foodApiService = new FoodApiService();
export default foodApiService;
