import { useGetProductoField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterTasteProps = {
  setFilterTaste: (taste: string) => void;
};

export const FilterTaste = (props: FilterTasteProps) => {
  const { setFilterTaste } = props;
  const { result, loading }: FilterTypes = useGetProductoField();

  console.log(result);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Tostado</p>
      {loading && result == null && <p>Cargando tostado...</p>}

      <RadioGroup onValueChange={(value) => setFilterTaste(value)}>
        {result !== null &&
          result.schema.attributes.taste.enum.map((taste: string) => (
            <div key={taste} className="flex items-center space-x-2">
              <RadioGroupItem value={taste} id={taste}></RadioGroupItem>
              <Label htmlFor={taste}>{taste}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};
