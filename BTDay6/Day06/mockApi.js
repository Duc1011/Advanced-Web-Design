const API_URL = "https://69a7860f2cd1d0552690d888.mockapi.io/api/v1/hotels";

const mockApi = {
  async getHotels() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Lỗi GET hotels");
    return await res.json();
  },

  async addHotel(data) {
    const body = {
      name:      data.name,
      type:      data.type,
      price:     Number(data.price),
      rating:    5,
      reviews:   0,
      available: 30,
      booked:    0,
      image:     data.image || "",
      liked:     false,
    };

    const res = await fetch(API_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Lỗi POST hotel");
    return await res.json();
  },

  async deleteHotel(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Lỗi DELETE hotel");
    return await res.json();
  },
};
