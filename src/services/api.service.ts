import axios from "axios";
import {
  ICategory,
  IComplexEquipment,
  IContactForm,
  IProduct,
  IProductResponse,
  IProject,
} from "../types/types";

const baseURL = "https://api.npkolimp.com/api/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ApiService = {
  async getProjects(limit?: string) {
    try {
      const response = await api.get<IProject[]>(`/projects/?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  },

  async getCategoryById(id: string | number | undefined) {
    try {
      const response = await api.get<ICategory>(`/category-product/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },
  async getEquipmentCategoryById(id: string | number | undefined) {
    try {
      const response = await api.get<ICategory>(`/comprehensive-equipment-category/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },
  async getComplexEquipmentById(id: string | undefined) {
    try {
      const response = await api.get<IComplexEquipment>(`/comprehensive-equipment/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },
  async getProductById(id: string | undefined) {
    try {
      const response = await api.get<IProduct>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },
  async getProjectById(id: string | undefined) {
    try {
      const response = await api.get<IProject>(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },

  async getProducts(categoryId: string | undefined | number) {
    try {
      const url = categoryId
        ? `/products/?category=${categoryId}`
        : "/products/";
      const response = await api.get<IProduct[]>(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  async getCategoryProjects() {
    try {
      const response = await api.get<ICategory[]>("/category-project/");
      return response.data;
    } catch (error) {
      console.error("Error fetching category projects:", error);
      throw error;
    }
  },
  async getCategoryEquipment() {
    try {
      const response = await api.get<ICategory[]>(
        "/comprehensive-equipment-category/"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching category projects:", error);
      throw error;
    }
  },

  async getCategoryProducts() {
    try {
      const response = await api.get<ICategory[]>("/category-product/");
      return response.data;
    } catch (error) {
      console.error("Error fetching category products:", error);
      throw error;
    }
  },

  async getProductsByCategory(categoryId: number | string) {
    try {
      const response = await api.get<IProductResponse>(
        `/products/?category=${categoryId}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  },
  async getEquipmentsByCategory(categoryId: number | string | undefined) {
    try {
      const response = await api.get<IComplexEquipment[]>(
        `/comprehensive-equipment/?category=${categoryId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  },

  async getNewProducts() {
    try {
      const response = await api.get<IProductResponse>(
        "/products/?isNew=true&limit=15"
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching new products:", error);
      throw error;
    }
  },

  async searchComprehensiveEquipment(query: string) {
    try {
      const response = await api.get(`/comprehensive-equipment/`, {
        params: { search: query },
      });
      return response.data;
    } catch (error) {
      console.error("Error searching comprehensive equipment:", error);
      throw error;
    }
  },

  async searchProducts(query: string) {
    try {
      const response = await api.get(`/products/`, {
        params: { search: query },
      });
      return response.data;
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },

  async getNews() {
    try {
      const response = await api.get('/news/');
      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error)
      throw error
    }
  },

  async getNewsById(id: string | number | undefined) {
    try {
      const response = await api.get(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error)
      throw error
    }
  },

  async postContact(data: IContactForm) {
    try {
      await api.post('/contact/', data)
    } catch (error) {
      console.error("Error posting contact:", error)
    }
  }
};
