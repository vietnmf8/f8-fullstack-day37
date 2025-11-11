import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

/* Child Comp 1 */
const ChildComp1 = memo(({ value, onIncrease }) => {
    console.log(`ChildComp1: re-render`);
    return (
        <div className="p-4 border rounded-lg bg-blue-50">
            <h2 className="font-semibold">Child 1 Count 1: {value}</h2>
            <Button onClick={onIncrease} className="mt-2">
                Tăng Count 1
            </Button>
        </div>
    );
});

/* Child Comp 2 */
const ChildComp2 = memo(({ value, onIncrease }) => {
    console.log(`ChildComp2: re-render`);
    return (
        <div className="p-4 border rounded-lg bg-blue-50">
            <h2 className="font-semibold">Child 2 Count 2: {value}</h2>
            <Button onClick={onIncrease} className="mt-2">
                Tăng Count 2
            </Button>
        </div>
    );
});

function ReactMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /* Tăng count 1 */
    const handleIncrease1 = useCallback(() => {
        setCount1((prev) => prev + 1);
    }, []);

    /* Tăng count 2 */
    const handleIncrease2 = useCallback(() => {
        setCount2((prev) => prev + 1);
    }, []);
    return (
        <div className="p-10 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">React Memo</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <ChildComp1 value={count1} onIncrease={handleIncrease1} />
                <ChildComp2 value={count2} onIncrease={handleIncrease2} />
            </div>
        </div>
    );
}

export default ReactMemo;
