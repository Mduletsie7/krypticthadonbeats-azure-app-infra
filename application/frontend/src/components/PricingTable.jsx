import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";

export const PricingTable = () => {
  return (
    <PrimeReactProvider>
    <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div className="text-900 font-bold text-6xl mb-4 text-center">
        Licensing Info
      </div>
      <div className="grid">
        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div
              className="shadow-2 p-3 h-full flex flex-column surface-card"
              style={{ borderRadius: "6px" }}
            >
              <div className="text-900 font-medium text-xl mb-2">Basic</div>
              <div className="text-600">Untagged High Quality MP3 File</div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$30</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">5000 sales</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">100,000 Audio Streams</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Upload to SoundCloud, Spotify, Apple Music, etc</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Use it for albums, performances, music videos and radio</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Kryptic Tha Don maintains full ownership of the instrumental</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
            </div>
          </div>
        </div>

        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div
              className="shadow-2 p-3 h-full flex flex-column surface-card"
              style={{ borderRadius: "6px" }}
            >
              <div className="text-900 font-medium text-xl mb-2">Premium</div>
              <div className="text-600">Untagged MP3 + WAV File</div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$50</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">10,000 sales</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">200,000 streams</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Upload to SoundCloud, Spotify, Apple Music, etc</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Use it for albums, performances, music videos and radio</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Kryptic Tha Don maintains full ownership of the instrumental</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
            </div>
          </div>
        </div>

        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div
              className="shadow-2 p-3 flex flex-column surface-card"
              style={{ borderRadius: "6px" }}
            >
              <div className="text-900 font-medium text-xl mb-2">
                Unlimited
              </div>
              <div className="text-600">MP3 + WAV + Trackouts</div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$100</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Unlimited sales & Unlimited streams</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Includes Trackout stem files</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Upload to SoundCloud, Spotify, Apple Music, etc</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Use it for albums, performances, music videos and radio</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-blue-800 mr-2"></i>
                  <span className="text-900">Kryptic Tha Don maintains full ownership of the instrumental</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </PrimeReactProvider>
  );
};
