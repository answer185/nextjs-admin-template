"use client"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Plus, Trash2 } from "lucide-react"

// 定义表单验证规则
const formSchema = z.object({
  plainText: z.string().min(1, "Plain text is required"),
  input: z.string().min(1, "Input is required"),
  select: z.enum(["male", "female"]),
  checkbox: z.array(z.string()).min(1, "At least one checkbox must be selected"),
  radio: z.enum(["Apple", "Huawei", "xiaomi"]),
  inputNumber: z.number().min(1, "Number is required"),
  textArea: z.string().min(1, "Text area is required"),
  switch: z.boolean(),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^1[3-9]\d{9}$/, "Invalid Chinese mobile number"),
  mobileIntl: z.object({
    countryCode: z.string().min(1, "Country code is required"),
    number: z.string().min(1, "Phone number is required")
  }),
  datePicker: z.date(),
  dateTimePicker: z.date(),
  monthPicker: z.date(),
  rangePicker: z.object({
    from: z.date(),
    to: z.date()
  }),
  rangeTimePicker: z.object({
    from: z.date(),
    to: z.date()
  }),
  timePicker: z.string().min(1, "Time is required"),
  uploadImage: z.instanceof(File).optional(),
  uploadFile: z.array(z.instanceof(File)).min(1, "At least one file is required"),
  colorPicker: z.string().min(1, "Color is required"),
  rate: z.number().min(1, "Rating is required"),
  dynamicInput: z.array(z.string()).min(1, "At least one field is required"),
  dynamicInputMulti: z.array(z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required")
  })).min(1, "At least one set of names is required"),
  agreement: z.boolean().refine(val => val, "You must accept the agreement")
})

export default function ComplexForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plainText: "",
      input: "",
      select: undefined,
      checkbox: [],
      radio: undefined,
      inputNumber: undefined,
      textArea: "",
      switch: false,
      email: "",
      mobile: "",
      mobileIntl: { countryCode: "+86", number: "" },
      datePicker: undefined,
      dateTimePicker: undefined,
      monthPicker: undefined,
      rangePicker: { from: undefined, to: undefined },
      rangeTimePicker: { from: undefined, to: undefined },
      timePicker: "",
      uploadImage: undefined,
      uploadFile: [],
      colorPicker: "#000000",
      rate: 0,
      dynamicInput: [""],
      dynamicInputMulti: [{ firstName: "", lastName: "" }],
      agreement: false
    }
  })

  const checkboxOptions = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
    { id: "option5", label: "Option 5" },
    { id: "option6", label: "Option 6" }
  ]

  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+81", name: "Japan" },
    { code: "+86", name: "China" },
    { code: "+91", name: "India" }
  ]

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const fillData = () => {
    form.reset({
      plainText: "China",
      input: "Sample input",
      select: "male",
      checkbox: ["option1", "option3"],
      radio: "Apple",
      inputNumber: 42,
      textArea: "This is a sample text area content.",
      switch: true,
      email: "example@example.com",
      mobile: "13800138000",
      mobileIntl: { countryCode: "+86", number: "13800138000" },
      datePicker: new Date(),
      dateTimePicker: new Date(),
      monthPicker: new Date(),
      rangePicker: { from: new Date(), to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
      rangeTimePicker: { from: new Date(), to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
      timePicker: "12:00",
      colorPicker: "#3b82f6",
      rate: 4,
      dynamicInput: ["First field", "Second field"],
      dynamicInputMulti: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" }
      ],
      agreement: true
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Plain Text */}
          <FormField
            control={form.control}
            name="plainText"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Plain Text</FormLabel>
                <FormControl>
                  <span>{field.value || "China"}</span>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input */}
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Input</FormLabel>
                <FormControl>
                  <Input placeholder="Enter text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Select */}
          <FormField
            control={form.control}
            name="select"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Select</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
          <FormField
            control={form.control}
            name="checkbox"
            render={() => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Checkbox</FormLabel>
                <div className="flex flex-wrap gap-4">
                  {checkboxOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="checkbox"
                      render={({ field }) => (
                        <FormItem key={item.id} className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(field.value?.filter((value) => value !== item.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{item.label}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Radio */}
          <FormField
            control={form.control}
            name="radio"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Radio</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="Apple" />
                      </FormControl>
                      <FormLabel className="font-normal">Apple</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="Huawei" />
                      </FormControl>
                      <FormLabel className="font-normal">Huawei</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="xiaomi" />
                      </FormControl>
                      <FormLabel className="font-normal">Xiaomi</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* InputNumber */}
          <FormField
            control={form.control}
            name="inputNumber"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Input Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter number"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TextArea */}
          <FormField
            control={form.control}
            name="textArea"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Text Area</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your text here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Switch */}
          <FormField
            control={form.control}
            name="switch"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Switch</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile (China) */}
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Mobile (China)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Chinese mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile (International) */}
          <div className="flex items-center space-x-4">
            <FormLabel>Mobile (International)</FormLabel>
            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="mobileIntl.countryCode"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.code} {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobileIntl.number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormMessage>
              {form.formState.errors.mobileIntl?.countryCode?.message || 
               form.formState.errors.mobileIntl?.number?.message}
            </FormMessage>
          </div>

          {/* DatePicker */}
          <FormField
            control={form.control}
            name="datePicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Date Picker</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DatePicker with Time */}
          <FormField
            control={form.control}
            name="dateTimePicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Date & Time Picker</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPPp")
                        ) : (
                          <span>Pick a date and time</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MonthPicker */}
          <FormField
            control={form.control}
            name="monthPicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Month Picker</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "MMM yyyy")
                        ) : (
                          <span>Pick a month</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown"
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RangePicker */}
          <FormField
            control={form.control}
            name="rangePicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Range Picker</FormLabel>
                <div className="flex space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[120px] pl-3 text-left font-normal",
                            !field.value?.from && "text-muted-foreground"
                          )}
                        >
                          {field.value?.from ? (
                            format(field.value.from, "PPP")
                          ) : (
                            <span>Start date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value?.from}
                        onSelect={(date) => field.onChange({ ...field.value, from: date })}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[120px] pl-3 text-left font-normal",
                            !field.value?.to && "text-muted-foreground"
                          )}
                        >
                          {field.value?.to ? (
                            format(field.value.to, "PPP")
                          ) : (
                            <span>End date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value?.to}
                        onSelect={(date) => field.onChange({ ...field.value, to: date })}
                        disabled={(date) =>
                          date < field.value?.from || date > new Date()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RangePicker with Time */}
          <FormField
            control={form.control}
            name="rangeTimePicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Range Time Picker</FormLabel>
                <div className="flex space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[140px] pl-3 text-left font-normal",
                            !field.value?.from && "text-muted-foreground"
                          )}
                        >
                          {field.value?.from ? (
                            format(field.value.from, "PPPp")
                          ) : (
                            <span>Start date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value?.from}
                        onSelect={(date) => field.onChange({ ...field.value, from: date })}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[140px] pl-3 text-left font-normal",
                            !field.value?.to && "text-muted-foreground"
                          )}
                        >
                          {field.value?.to ? (
                            format(field.value.to, "PPPp")
                          ) : (
                            <span>End date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value?.to}
                        onSelect={(date) => field.onChange({ ...field.value, to: date })}
                        disabled={(date) =>
                          date < field.value?.from || date > new Date()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TimePicker */}
          <FormField
            control={form.control}
            name="timePicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Time Picker</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload Image */}
          <FormField
            control={form.control}
            name="uploadImage"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                {field.value && (
                  <div className="mt-2">
                    <img 
                      src={URL.createObjectURL(field.value)} 
                      alt="Preview" 
                      className="h-20 w-20 object-cover rounded"
                    />
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload File */}
          <FormField
            control={form.control}
            name="uploadFile"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Upload File</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) => field.onChange(Array.from(e.target.files || []))}
                  />
                </FormControl>
                {field.value && field.value.length > 0 && (
                  <div className="mt-2">
                    <ul className="list-disc pl-5">
                      {field.value.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ColorPicker */}
          <FormField
            control={form.control}
            name="colorPicker"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Color Picker</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      className="w-16 h-10 p-1"
                      {...field}
                    />
                    <Input
                      type="text"
                      className="w-24"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rate */}
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-4">
                <FormLabel>Rate</FormLabel>
                <FormControl>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => field.onChange(star)}
                        className={`text-2xl ${star <= field.value ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DynamicInput */}
          <FormField
            control={form.control}
            name="dynamicInput"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-4">
                  <FormLabel>Dynamic Input</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => field.onChange([...field.value, ""])}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Field
                  </Button>
                </div>
                <div className="space-y-2 mt-2">
                  {field.value.map((value, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={value}
                        onChange={(e) => {
                          const newValues = [...field.value]
                          newValues[index] = e.target.value
                          field.onChange(newValues)
                        }}
                      />
                      {field.value.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newValues = field.value.filter((_, i) => i !== index)
                            field.onChange(newValues)
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DynamicInput (Multi) */}
          <FormField
            control={form.control}
            name="dynamicInputMulti"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-4">
                  <FormLabel>Dynamic Input (Multi)</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => field.onChange([...field.value, { firstName: "", lastName: "" }])}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Field
                  </Button>
                </div>
                <div className="space-y-2 mt-2">
                  {field.value.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        placeholder="First Name"
                        value={item.firstName}
                        onChange={(e) => {
                          const newValues = [...field.value]
                          newValues[index].firstName = e.target.value
                          field.onChange(newValues)
                        }}
                      />
                      <Input
                        placeholder="Last Name"
                        value={item.lastName}
                        onChange={(e) => {
                          const newValues = [...field.value]
                          newValues[index].lastName = e.target.value
                          field.onChange(newValues)
                        }}
                      />
                      {field.value.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newValues = field.value.filter((_, i) => i !== index)
                            field.onChange(newValues)
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agreement Checkbox */}
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">I have read the agreement</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex space-x-4">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={fillData}>
              Fill Data
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}