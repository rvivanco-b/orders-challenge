CREATE TABLE public.orders (
    id uuid NOT NULL,
    status varchar NOT NULL,
    payment_method_id uuid NOT NULL references paymentmethod(id),
    total decimal NOT NULL,
    subtotal decimal NOT NULL,
    discount decimal NOT NULL,
    promo_code varchar NOT NULL references promocode(id),
    client_name varchar NOT NULL,
    client_phone varchar NOT NULL,
    platform varchar NOT NULL,
    delivery_man varchar NOT NULL,
    rejected_by uuid NOT NULL,
    accepted_by uuid NOT NULL,
    cancelled_by uuid NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.orderitems (
    id uuid NOT NULL,
    order_id uuid NOT NULL references user(id),
    product_id uuid NOT NULL references product(id),
    count integer NOT NULL,
    modifier varchar NOT NULL,
    extra varchar NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.product (
    id uuid NOT NULL,
    name varchar NOT NULL,
    price decimal NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.event (
    id uuid NOT NULL,
    event_name varchar NOT NULL,
    payload jsonb NOT NULL,
    occurred_on bigint NOT NULL,
    aggregate_id uuid NOT NULL,
    metadata jsonb NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.user (
    id uuid NOT NULL,
    username varchar NOT NULL,
    password varchar NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.role (
    id uuid NOT NULL,
    role_name varchar NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.userrole (
    user_id uuid NOT NULL references user(id),
    role_id uuid NOT NULL references role(id),
    PRIMARY KEY (user_id, role_id)
);


CREATE TABLE public.paymentmethod (
    id uuid NOT NULL,
    name varchar NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE public.promocode (
    code varchar NOT NULL,
    name varchar NOT NULL,
    description varchar NOT NULL,
    decimal_discount decimal NOT NULL,
    percentage_discount decimal NOT NULL,
    PRIMARY KEY (code)
);

