import { test } from '@playwright/test';
import { expect } from '../assertions/custom-expect'

test('POST request - Create New Booking', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Kim',
      lastname: 'Smith',
      totalprice: 125,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-04-01',
        checkout: '2024-07-15',
      },
      additionalneeds: 'Breakfast',
    },
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log("Response Body =>", responseBody)
  expect(responseBody.booking).toHaveProperty('totalprice', 125);
  expect(responseBody.booking).toHaveProperty('firstname', 'Kim');
  expect(responseBody.booking).toHaveProperty('lastname', 'Smith');
  expect(responseBody.booking).toHaveProperty('depositpaid', true);
  expect(responseBody.booking.totalprice).toBeNumber();
});
