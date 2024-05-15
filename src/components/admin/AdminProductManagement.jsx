"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeAlert, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import DragDropUploader from "../../components/ui/drag_drop_uploader";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Textarea } from "../../components/ui/textarea";
import { createMicro, createSpeaker } from "../../utils/supabase/methode";

const formSchema = z.object({
  category: z.string(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  price: z.number(),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  in_stock: z.boolean(),
});

export default function AdminProductManagement({ supabase }) {
  const [imagesUrl, setImagesUrl] = useState([]);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      name: "",
      price: 0,
      description: "",
      in_stock: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const category = values.category;
    switch (category) {
      case "enceintes":
        const { category: speaker_, ...speakerValues } = values;
        const speaker = { ...speakerValues, imagesUrl };
        try {
          await createSpeaker(supabase, speaker);
        } catch (e) {
          console.error(e);
        }
        break;
      case "micro":
        const { category: micro_, ...microValues } = values;

        const micro = { ...microValues, imagesUrl };
        try {
          await createMicro(supabase, micro);
        } catch (e) {
          console.error(e);
        }
        break;
    }
    setImagesUrl([]);
  }

  return (
    <div className="flex  items-center justify-around pt-4 h-full">
      <div className="space-y-8 w-2/3 h-5/6  flex flex-col items-center gap-4">
        <h4 className="text-2xl font-bold">Ajouter un produit sur le site</h4>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/2 "
          >
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selectionner la catégorie </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir la catégorie" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Pays</SelectLabel>
                        <SelectItem value="algerie">Algérie</SelectItem>
                        <SelectItem value="maroc">Maroc</SelectItem>
                        <SelectItem value="tunisie">Tunisie</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Catégories</SelectLabel>
                        <SelectItem value="enceintes">Enceintes</SelectItem>
                        <SelectItem value="mixage">Table de Mixage</SelectItem>
                        <SelectItem value="micro">Micro</SelectItem>
                        <SelectItem value="ecrans">Ecrans</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Fournisseur</SelectLabel>
                        <SelectItem value="m1">Marque 1</SelectItem>
                        <SelectItem value="m2">Marque 2</SelectItem>
                        <SelectItem value="m3">Marque 3</SelectItem>
                        <SelectItem value="m4">Marque 4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    {field.value
                      ? `Vous avez selectionner ${
                          field.value.charAt(0).toUpperCase() +
                          field.value.slice(1)
                        }`
                      : "Pas de selection active"}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrer le nom du produit ..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      {...field}
                      onChange={(event) => field.onChange(+event.target.value)}
                    />
                  </FormControl>
                  <FormDescription>This is your price.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Entrer la déscription du produit ... "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your description.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="in_stock"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-center items-center gap-3">
                    <FormLabel>En stock ? </FormLabel>
                    <FormControl>
                      <Switch
                        id="inStockSwitch"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor="inStockSwitch">
                      {field.value === true ? <BadgeCheck /> : <BadgeAlert />}
                    </Label>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <DragDropUploader
        form={form}
        imagesUrl={imagesUrl}
        setImageUrl={setImagesUrl}
      />
    </div>
  );
}
