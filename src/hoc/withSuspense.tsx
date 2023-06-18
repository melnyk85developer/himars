import React, { Suspense } from "react";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>){
    return (props: any) => {
        return  <Suspense fallback={<div>Loading...</div>}>
                    <WrappedComponent {...props} />
                </Suspense>
    }
}