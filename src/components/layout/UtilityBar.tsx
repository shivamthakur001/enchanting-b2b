import { CreateQueryButton } from "../navigation/CreateQueryButton";
import { AccountMenu } from "../navigation/AccountMenu";

export function UtilityBar() {
  return (
    <div className="nav-utility-surface">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="nav-utility-muted truncate text-[11px] font-medium tracking-[0.08em] uppercase">
          Exclusive B2B Portal for Madhya Pradesh
        </p>
        <div className="flex items-center gap-3">
          <CreateQueryButton variant="utility" className="hidden sm:inline-flex" />
          <AccountMenu inverted />
        </div>
      </div>
    </div>
  );
}
