import http from './config';

export const reserveDress = async (data: any) => {
  return await http.post('/reservation', data);
};

export const getReserveDress = async () => {
  return await http.get('/reservation');
};
