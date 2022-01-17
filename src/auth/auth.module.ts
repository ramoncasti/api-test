import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [ConfigModule.forRoot(),
    UsuariosModule,
    PassportModule,
    JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '60d' },
  }),
    ],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
