import axios from 'axios';

const userService = axios.create({
  baseURL: 'http://localhost:8080/api', 
});

const driverSerivce = axios.create({
  baseURL: 'http://localhost:8081/api/Driver',
});

const listingService = axios.create({
  baseURL: 'http://localhost:8083/api/Listing',
});

const eventService = axios.create({
  baseURL: 'http://localhost:8083/api/Event',
});

export { userService, driverSerivce, listingService, eventService };