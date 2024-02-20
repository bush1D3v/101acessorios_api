export abstract class GlobalUserProviders {
  public abstract verifyEmailUsage(email: string): Promise<void>
}
