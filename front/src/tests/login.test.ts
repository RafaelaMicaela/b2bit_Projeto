describe('Login Page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display login page', async () => {
    await expect(page).toMatch('Login Page');
  });

  it('should login successfully', async () => {
    await page.type('input[name="email"]', 'user@example.com');
    await page.type('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page.url()).toBe('http://localhost:3000/user');
  });
});
