import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import InnerHeaderLayout from "../components/layouts/InnerHeaderLayout";
import Dropdown from "../components/layouts/Dropdown";
import DropdownHeader from "../components/layouts/DropdownHeader";
import DropdownBody from "../components/layouts/DropdownBody";
import DropdownItem from "../components/ui/DropdownItem";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import Modal from "../components/layouts/Modal";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Select from "../components/form/Select";
const CoursePage = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div className=" grid grid-cols-5 space-x-3 pt-3">
      <div className=" col-span-4 w-full ">
        <div className="flex justify-end space-x-1 border-b-2 pb-3">
          <p className=" border rounded-lg border-gray-400 cursor-pointer bg-colorBackground px-3 py-1 hover:bg-gray-500 hover:text-white">
            Collapse all
          </p>
          <p className=" border-2 border-gray-400 cursor-pointer bg-colorBackground px-3 py-1 hover:bg-gray-500 hover:text-white">
            Collapse all
          </p>
          <p className=" border-2 border-gray-400 cursor-pointer bg-colorBackground px-3 py-1 hover:bg-gray-500 hover:text-white">
            Collapse all
          </p>
          <p className=" border-2 border-gray-400 cursor-pointer bg-colorBackground px-3 py-1 hover:bg-gray-500 hover:text-white">
            Collapse all
          </p>
        </div>
        <div className="m-5 p-2">
          <InnerHeaderLayout>
            <div className="">
              <div>
                <Dropdown>
                  <DropdownHeader>
                    <AiFillCaretDown size={5} className=" w-5 h-5 mr-2" />
                    <p className="text-lg font-bold text-colorText">Header</p>
                  </DropdownHeader>
                  <DropdownBody direction="left">
                    <div className="py-1">
                      <DropdownItem title="Edit" />
                      <DropdownItem title="Duplicate" />
                    </div>
                    <div className="py-1">
                      <DropdownItem title="Archive" />
                      <DropdownItem title="Move" />
                    </div>
                    <div className="py-1">
                      <DropdownItem title="Share" />
                      <DropdownItem title="Add to favorites" />
                    </div>
                    <div className="py-1">
                      <DropdownItem title="Delete" />
                    </div>
                  </DropdownBody>
                </Dropdown>

                {/* <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-colorText hover:ring-1 hover:ring-inset ring-gray-300 hover:bg-gray-50  items-center cursor-pointer hover:text-green-500">
                      <div className="flex items-center">
                        <AiFillCaretDown size={5} className=" w-5 h-5 mr-2" />
                        <p className="text-lg font-bold text-colorText">
                          Header
                        </p>
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Duplicate
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Archive
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Move
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Share
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Add to favorites
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Delete
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div>
                <Modal
                  button={
                    <FaPlus
                      onClick={() => setOpen(true)}
                      className="w-4 h-4 text-colorSidebar cursor-pointer"
                      size={4}
                    />
                  }
                  open={open}
                  setOpen={setOpen}
                  cancelButtonRef={cancelButtonRef}
                >
                  <form>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>

                        <div className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">
                          <div className="col-span-4">
                            <label
                              htmlFor="username"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Username
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 text-sm">
                                  workcation.com/
                                </span>
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  autoComplete="username"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                                  placeholder="janesmith"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              About
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                defaultValue={""}
                              />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              Write a few sentences about yourself.
                            </p>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="photo"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                              <UserCircleIcon
                                className="h-12 w-12 text-gray-300"
                                aria-hidden="true"
                              />
                              <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="cover-photo"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              <div className="text-center">
                                <PhotoIcon
                                  className="mx-auto h-12 w-12 text-gray-300"
                                  aria-hidden="true"
                                />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Personal Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>

                        <div className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">
                          <div className="col-span-3">
                            <Label htmlFor="firstName" title="First name" />
                            <Input
                              type="text"
                              title="firstName"
                              autoComplete="given-name"
                            />
                          </div>

                          <div className="col-span-3">
                            <Label htmlFor="lastName" title="Last name" />

                            <Input
                              type="text"
                              title="lastName"
                              autoComplete="family-name"
                            />
                          </div>

                          <div className="col-span-4">
                            <Label htmlFor="email" title="Email address" />

                            <Input
                              type="email"
                              title="email"
                              autoComplete="email"
                            />
                          </div>

                          <div className="col-span-3">
                            <Label title="Country" htmlFor="country" />

                            <Select title="country" autoComplete="country-name">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </Select>
                          </div>

                          <div className="col-span-full">
                            <Label
                              htmlFor="streetaddress"
                              title="Street address"
                            />

                            <Input
                              type="text"
                              title="streetaddress"
                              autoComplete="street-address"
                            />
                          </div>

                          <div className="col-span-2 col-start-1">
                            <Label htmlFor="city" title="City" />
                            <Input
                              type="text"
                              title="city"
                              autoComplete="address-level2"
                            />
                          </div>

                          <div className="col-span-2">
                            <Label htmlFor="region" title="State / Province" />
                            <Input
                              type="text"
                              title="region"
                              autoComplete="address-level1"
                            />
                          </div>

                          <div className="col-span-2">
                            <Label
                              htmlFor="postalcode"
                              title="ZIP / Postal code"
                            />
                            <Input
                              type="text"
                              title="postalcode"
                              autoComplete="postal-code"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Notifications
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          We'll always let you know about important changes, but
                          you pick what else you want to hear about.
                        </p>

                        <div className="mt-10 space-y-10">
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                              By Email
                            </legend>
                            <div className="mt-6 space-y-6">
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <Input type="checkbox" title="comments" />
                                </div>
                                <div className="text-sm leading-6">
                                  <Label htmlFor="comments" title="Comments" />
                                  <p className="text-gray-500">
                                    Get notified when someones posts a comment
                                    on a posting.
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <Input type="checkbox" title="candidates" />
                                </div>
                                <div className="text-sm leading-6">
                                  <Label
                                    htmlFor="candidates"
                                    title="Candidates"
                                  />
                                  <p className="text-gray-500">
                                    Get notified when a candidate applies for a
                                    job.
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <Input type="checkbox" title="offers" />
                                </div>
                                <div className="text-sm leading-6">
                                  <Label htmlFor="offers" title="Offers" />
                                  <p className="text-gray-500">
                                    Get notified when a candidate accepts or
                                    rejects an offer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                              Push Notifications
                            </legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              These are delivered via SMS to your mobile phone.
                            </p>
                            <div className="mt-6 space-y-6">
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-everything"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-everything"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Everything
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-email"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-email"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Same as email
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-nothing"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="push-nothing"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  No push notifications
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Modal>
              </div>

              <Dropdown>
                <DropdownHeader>
                  <BsThreeDotsVertical />
                </DropdownHeader>

                <DropdownBody direction="right">
                  <div className="py-1">
                    <DropdownItem title="Edit" />
                    <DropdownItem title="Duplicate" />
                  </div>
                  <div className="py-1">
                    <DropdownItem title="Archive" />
                    <DropdownItem title="Move" />
                  </div>
                  <div className="py-1">
                    <DropdownItem title="Share" />
                    <DropdownItem title="Add to favorites" />
                  </div>
                  <div className="py-1">
                    <DropdownItem title="Delete" />
                  </div>
                </DropdownBody>
              </Dropdown>
            </div>
          </InnerHeaderLayout>

          <div className="border-2 border-t-0 border-gray-200 p-2 bg-white">
            <div>
              <p className=" font-semibold">Second</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" bg-green-500"></div>
    </div>
  );
};

export default CoursePage;
