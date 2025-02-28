--
-- PostgreSQL database dump
--

-- Dumped from database version 13.15 (Debian 13.15-1.pgdg120+1)
-- Dumped by pg_dump version 13.15 (Debian 13.15-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: course; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    img_url character varying NOT NULL,
    price integer NOT NULL,
    valid boolean NOT NULL,
    "position" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.course OWNER TO admin;

--
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_id_seq OWNER TO admin;

--
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;


--
-- Name: user_messages; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.user_messages (
    id integer NOT NULL,
    email character varying NOT NULL,
    content text NOT NULL,
    read boolean DEFAULT false NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_messages OWNER TO admin;

--
-- Name: user_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.user_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_messages_id_seq OWNER TO admin;

--
-- Name: user_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.user_messages_id_seq OWNED BY public.user_messages.id;


--
-- Name: course id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);


--
-- Name: user_messages id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.user_messages ALTER COLUMN id SET DEFAULT nextval('public.user_messages_id_seq'::regclass);


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.course (id, title, description, img_url, price, valid, "position", "createdAt") FROM stdin;
1	Basic Cornering	Riding around the curves of a motorcycle track on asphalt	https://i.pinimg.com/564x/74/f7/a5/74f7a516f4d2a26fb0b5da4eef7c799f.jpg	50	t	1	2024-07-29 18:19:24.586779
2	Advanced Cornering	Mastering the technique of taking corners at high speed	https://i.pinimg.com/564x/9c/82/b3/9c82b3de3995485982cd21443e60af9c.jpg	60	t	2	2024-07-29 20:29:28.146565
4	Advanced Off-road	Advanced techniques for handling difficult off-road conditions	https://i.pinimg.com/564x/e2/7a/f8/e27af8fad8002bf2d6c2b597d0bc8503.jpg	55	t	4	2024-07-29 20:29:28.146565
5	Touring Techniques	Techniques for long-distance touring on a motorcycle	https://i.pinimg.com/564x/a6/ec/b2/a6ecb223f7c279d1b57f73baa592bb21.jpg	60	t	5	2024-07-29 20:29:28.146565
6	Wet Weather Riding	How to handle a motorcycle in wet and slippery conditions	https://i.pinimg.com/564x/45/65/a7/4565a7fe1b48243bc028e75251ac25b9.jpg	70	t	6	2024-07-29 20:29:28.146565
7	Starting with wheelies	Learn how to do wheelies on a motorcycle	https://i.pinimg.com/564x/63/ff/b2/63ffb25cfa742123857a490cb5601259.jpg	75	t	7	2024-07-29 20:29:28.146565
8	Urban Riding Skills	Techniques for safely navigating urban environments	https://i.pinimg.com/564x/e7/71/9b/e7719b04de4709c7e2b3959bef88c254.jpg	55	t	8	2024-07-29 20:29:28.146565
3	Off-road Basics	Introduction to off-road riding with a focus on basic techniques	https://i.pinimg.com/564x/ff/b6/0b/ffb60ba66b5b2f24f3566d90327d6ed3.jpg	40	t	3	2024-07-29 20:29:28.146
\.


--
-- Data for Name: user_messages; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.user_messages (id, email, content, read, created_at) FROM stdin;
3	sampleGmail@gmail.com	Test	f	2024-07-30 22:10:36.443751
4	sampleGmail@gmail.com	Hello again	f	2024-07-31 10:52:29.296655
5	sampleGmail@gmail.com	Can I sign to a course?	f	2024-07-31 11:09:26.08243
2	hello@mail.com	Hello There!	f	2024-07-30 22:02:52.689
\.


--
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.course_id_seq', 8, true);


--
-- Name: user_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.user_messages_id_seq', 5, true);


--
-- Name: user_messages PK_5a90e206d5e3dfde48f640ea7c6; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.user_messages
    ADD CONSTRAINT "PK_5a90e206d5e3dfde48f640ea7c6" PRIMARY KEY (id);


--
-- Name: course PK_bf95180dd756fd204fb01ce4916; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY (id);


--
-- Name: IDX_f923f8e0b947ead1cde1d04639; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX "IDX_f923f8e0b947ead1cde1d04639" ON public.user_messages USING btree (email);


--
-- PostgreSQL database dump complete
--

