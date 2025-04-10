import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get(
    "https://api.unsplash.com/photos/?client_id=TgX6vCr7P6VbVXRztS7x-BCKsz_x8JgBvktxAHTVZPc"
  );
  return response.data;
};
