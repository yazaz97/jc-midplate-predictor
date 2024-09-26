import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Button } from "@chakra-ui/react";

function ModalComp({
  isOpen,
  onClose,
  graphData,
  lable,
  graphTitle,
  xAxis,
  yAxis,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="70vw" maxWidth="70vw">
          <ModalHeader textAlign="center">{graphTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <Line
                data={{
                  labels: graphData.map((item) => item.x),
                  datasets: [
                    {
                      label: lable,
                      data: graphData.map((item) => item.y),
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      type: "category",
                      title: {
                        display: true,
                        text: xAxis,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: yAxis,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true, // Use a custom point style
                      },
                    },
                  },
                  elements: {
                    point: {
                      pointStyle: "circle", // Set the point style to circle
                    },
                  },
                }}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="#506177"
              color="white"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
