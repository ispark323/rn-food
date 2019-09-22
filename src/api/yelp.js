import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 84YIq4AcIeW67igrdYJduxKEHNg4c9ra8qb5u4rdvFa2JKyJv052mZtjbHDEDwq4IAuoHJCjFOOj9PL2N42OYr0nN58fBF2UKj5OmhuMZCAP34lRlhm0x16HaWqHXXYx'
  }
});
