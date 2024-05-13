// import store from "@/store";
import axios from 'axios';

export const viewSecuredAttachment = async (documentUrl, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer',
    };
    if (documentUrl !== 'https://api.talantahrm.com/') {
      const response = await axios.get(documentUrl, config);

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: '*' });
        const imageUrl = URL.createObjectURL(blob);

        return imageUrl;
      } else if (response.status === 404) {
        console.info('Error: Possible invalid url');
      } else {
        console.error(response.data.StatusMessage);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
