import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ORDERS_TABLE_HEADER } from "@/constants";
import { useGetUserOrdersQuery } from "@/api/orders/queries";
import LoadingPage from "../loading";
const Orders = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const {
    data: userOrders,
    isLoading,
    isFetching,
    isError,
  } = useGetUserOrdersQuery(id);
  if (isFetching) return <LoadingPage />;
  if (isError) return <></>;
  console.log(userOrders);
  return (
    <div className="m-auto max-w-6xl py-12 md:py-24 ">
      <Table>
        <TableHeader>
          <TableRow>
            {ORDERS_TABLE_HEADER.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-background">
          {userOrders?.map((order) =>
            order.cartItems.map((item) => (
              <>
                <TableRow key={item._id}>
                  <TableCell>
                    <div className="flex gap-2">
                      <div className="h-14 w-14 shrink-0">
                        <img
                          className="aspect-square h-full w-full object-cover"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm lg:text-lg">
                          <span>{item.title}</span>
                          <span> * </span>
                          <span>{item.quantity}</span>
                        </p>
                        <p className=" text-muted-foreground ">
                          <span className="mr-1">{item?.price.toFixed(2)}</span>
                          <span className="uppercase">AED</span>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.weight} </TableCell>

                  <TableCell>
                    <p>
                      <span className="mr-1">
                        {(Number(item.price) * item.quantity).toFixed(2)}
                      </span>
                      <span className=" uppercase">AED</span>
                    </p>
                  </TableCell>
                </TableRow>
              </>
            )),
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
