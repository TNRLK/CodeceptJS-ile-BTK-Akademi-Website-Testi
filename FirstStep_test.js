Feature('FirstStep');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.fillField('//input[@name="q"]',"Btk Akademi");
    I.wait(1);
    I.click('//input[@name="btnK"]');
    I.click('//a[@href="https://www.btkakademi.gov.tr/"]');
    I.click('//a[@href="/portal/sign-in?returnUrl=/"]');
    I.wait(2);
    I.click('//button[@class="PrimaryBig-sc-8hqj7b-0 kgUIuc big-button w-100"][contains(text(),"E-Devlet ile Giriş Yap")]');
    I.wait(2);
    I.fillField('//input[@id="tridField"]',*TcKimlikNo*);
    I.fillField('//input[@id="egpField"]',secret("*Şifre*"));
    I.click('//input[@name="submitButton"]');
    I.wait(3);
    I.click('//button[@class="close"]');
    I.wait(1);
    I.click('//a[@href="/portal/catalog?categoryId=353"]');
    I.wait(1);
    I.click('//a[@href="/portal/course/devops-coezuemleri-jenkins-21323"]');
    I.wait(1);
    I.click('//button[@class="PrimaryBig-sc-8hqj7b-0 kgUIuc contentStatus__PrimaryBigStyled-sc-10ld1gx-4 fiyyMx big-button w-100"]');
    I.wait(12);
    I.switchTo('iframe');
    I.click('//body[@class="pushable"]');
    I.wait(1);
    I.click('//body[@class="pushable"]');
    I.wait(1);
    I.click('//div[@class="forward5 ivid-ctrl-item"]');
    I.wait(1);
    I.click('//div[@class="forward5 ivid-ctrl-item"]');
    I.wait(1);
    I.click('//div[@class="forward5 ivid-ctrl-item"]');
    I.switchTo();
    I.click('//span[@style="vertical-align: middle;"]');
    I.wait(2);
    I.click('//div[@class="header__AvatarOuter-sc-171p1vb-19 kHvZUy"]');
    I.wait(1);
    I.click('/html/body/div/div/div/div/div/ul/a[3]');
    I.wait(1);
    I.click('//a[@href="/portal"]')
    I.wait(5);
    



});
