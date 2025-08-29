import { test, expect } from '@playwright/test';

test('GET /users returns users array', async ({ request, baseURL }) => {
  const res = await request.get(`${baseURL}/users`);
  expect(res.ok()).toBeTruthy();

  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
  // quick contract spot-check
  const u = data[0];
  expect(u).toHaveProperty('id');
  expect(u).toHaveProperty('name');
});
