import { usersService } from '../../support/services/UsersService';

describe('GET /users/:id - Consulta de Usuário por ID', () => {
  it('deve retornar todos os dados completos e corretos do usuário especificado (id=1)', () => {
    usersService.getById(1).then((res) => {
      expect(res.status).to.eq(200);

      const user = res.body;
      const mainFields = ['id','firstName','lastName','maidenName','age','gender','email','phone','username','password','birthDate','image','bloodGroup','height','weight','eyeColor','hair','ip','address','macAddress','university','bank','company','ein','ssn','userAgent','crypto','role'];
      mainFields.forEach(k => expect(user, `campo ${k}`).to.have.property(k));

      // nested checks
      expect(user.hair).to.have.all.keys('color','type');
      expect(user.address).to.have.property('coordinates');
      expect(user.address.coordinates).to.have.all.keys('lat','lng');
    });
  });
});
