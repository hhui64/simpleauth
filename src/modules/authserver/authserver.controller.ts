import { Controller, Post } from '@nestjs/common'

@Controller('authserver')
export class AuthserverController {
  constructor() {}

  /**
   * 登录 —— 使用密码进行身份验证，并分配一个新的令牌。
   */
  @Post('authenticate')
  authenticate() {
    return 'authenticate'
  }

  /**
   * 刷新令牌 —— 吊销原令牌，并颁发一个新的令牌。
   */
  @Post('refresh')
  refresh() {
    return 'refresh'
  }

  /**
   * 验证令牌 —— 检验令牌是否有效。
   */
  @Post('validate')
  validate() {
    return 'validate'
  }

  /**
   * 吊销令牌 —— 吊销给定令牌。
   */
  @Post('invalidate')
  invalidate() {
    return 'invalidate'
  }

  /**
   * 登出 —— 吊销用户的所有令牌。
   */
  @Post('signout')
  signout() {
    return 'signout'
  }
}
