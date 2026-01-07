import * as React from "react"
import { cn } from "@/lib/utils"

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    ref={ref}
                    className={cn(
                        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        className
                    )}
                    {...props}
                >
                    {children}
                </select>
                {/* Chevron icon can be added here if needed, or rely on browser default for native feel if class removes it */}
            </div>
        )
    }
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
