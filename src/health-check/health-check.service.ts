import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthCheckService {
  async checkHealth() {
    return "Server Running";
  }
}
