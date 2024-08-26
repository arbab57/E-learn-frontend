const BASE_URL = 'https://elearningportal-56538109f664.herokuapp.com/'

export const URLS = {
    CHECK: BASE_URL + 'auth/check',
    REGISTER: BASE_URL + 'auth/register',
    LOGIN: BASE_URL + 'auth/login',
    SIGNOUT: BASE_URL + 'auth/signout',
    GETOTP: BASE_URL + 'auth/request-otp',
    RESETPASSWORD: BASE_URL + 'auth/reset-password',
    CHANGEPASSWORD: BASE_URL + 'auth/change-password',
    SAVEDCOURSES: BASE_URL + 'courses/saved',
    BOUGHTCOURSES: BASE_URL + 'courses/bought-courses',
    FEATURED: BASE_URL + 'courses/featured',
    COURSES: BASE_URL + 'courses/search',

}